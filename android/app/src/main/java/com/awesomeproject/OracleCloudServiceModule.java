package com.awesomeproject;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.Map;
import oracle.cloud.mobile.authorization.AuthorizationAgent;
import oracle.cloud.mobile.authorization.AuthorizationCallback;
import oracle.cloud.mobile.customcode.CustomHttpResponse;
import oracle.cloud.mobile.customcode.GenericCustomCodeClientCallBack;
import oracle.cloud.mobile.exception.ServiceProxyException;
import oracle.cloud.mobile.mobilebackend.MobileBackendManager;
import oracle.cloud.mobile.rest.RestClient;

/**
 * Created by dev3 on 11/2/17.
 */

public class OracleCloudServiceModule extends ReactContextBaseJavaModule {

    private final int HTTP_METHOD_GET = 1;
    private final int HTTP_METHOD_POST = 2;
    private final int HTTP_METHOD_DELETE = 3;
    private final int HTTP_METHOD_PATCH = 4;
    private final int HTTP_METHOD_PUT = 5;

    public OracleCloudServiceModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "OracleCloudServiceModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("HTTP_METHOD_GET", HTTP_METHOD_GET);
        constants.put("HTTP_METHOD_POST", HTTP_METHOD_POST);
        constants.put("HTTP_METHOD_DELETE", HTTP_METHOD_DELETE);
        constants.put("HTTP_METHOD_PATCH", HTTP_METHOD_PATCH);
        constants.put("HTTP_METHOD_PUT", HTTP_METHOD_PUT);
        return constants;
    }

    @ReactMethod
    public void loginUser(final String user, String password, final Callback callback) {
        try {

            AuthorizationCallback mLoginCallback = new AuthorizationCallback() {
                @Override
                public void onCompletion(ServiceProxyException exception) {
                    if (exception == null) {
                        callback.invoke(true, "Authorization user: " + user + " successful");
                    } else {
                        callback.invoke(false, exception.getMessage());
                    }
                }
            };

            // Hacemelos la peticion de inicio de sesion con usuario y contraseña
            MobileBackendManager.getManager()
                    .getDefaultMobileBackend(getCurrentActivity())
                    .getAuthorization().authenticate(getCurrentActivity(), user, password, mLoginCallback);

        } catch (Exception e) {
            e.printStackTrace();
            callback.invoke(false, e.getMessage());
        }
    }

    @ReactMethod
    public void loginAnonymous(final Callback callback) {
        try {
            AuthorizationCallback mLoginCallback = new AuthorizationCallback() {
                @Override
                public void onCompletion(ServiceProxyException exception) {
                    if (exception == null) {
                        callback.invoke(true, "Authorization anonymous successful");
                    } else {
                        callback.invoke(false, exception.getMessage());
                    }
                }
            };

            // Haceme la peticion de inicio de sesion anonimo
            MobileBackendManager.getManager()
                    .getDefaultMobileBackend(getCurrentActivity())
                    .getAuthorization().authenticateAnonymous(getCurrentActivity(), mLoginCallback);

        } catch (Exception e) {
            e.printStackTrace();
            callback.invoke(false, e.getMessage());
        }
    }


    @ReactMethod
    public void logout(final Callback callback) {
        try {
            AuthorizationCallback mLoginCallback = new AuthorizationCallback() {
                @Override
                public void onCompletion(ServiceProxyException exception) {
                    if (exception == null) {
                        callback.invoke(true, "User logout successful");
                    } else {
                        callback.invoke(false, exception.getMessage());
                    }
                }
            };

            AuthorizationAgent authorization = MobileBackendManager.getManager().getDefaultMobileBackend(getCurrentActivity()).getAuthorization();
            if(authorization != null && authorization.isAuthorized())
                MobileBackendManager.getManager()
                        .getDefaultMobileBackend(getCurrentActivity())
                        .getAuthorization().logout(getCurrentActivity(), mLoginCallback);
            else
                callback.invoke(false, "Aún no inició sesión");

        } catch (Exception e) {
            e.printStackTrace();
            callback.invoke(false, e.getMessage());
        }
    }

    @ReactMethod
    public void invokeEndPoint(String apiEndPoint, String body, int httpMethod, final Callback callback) {
        try {
            GenericCustomCodeClientCallBack genericCustomCodeClientCallBack = new GenericCustomCodeClientCallBack() {
                @Override
                public void requestCompleted(CustomHttpResponse response, JSONObject data, Exception exception) {
                    if (exception == null) {
                        boolean responseStatus = (response.getHttpStatus() >= 200 && response.getHttpStatus() < 300);

                        if(responseStatus) {
                            String res = "";
                            if(data != null) {
                                res = data.toString();
                            }
                            callback.invoke(true, res);
                        }
                        else {
                            callback.invoke(false, "httpStatus: " + response.getHttpStatus());
                        }
                    }
                    else {
                        callback.invoke(false, exception.getMessage());
                    }
                }
            };

            // Obtenemos el tipo de HTTP
            RestClient.HttpMethod method = getHttpMethod(httpMethod);

            // Pasamos a JSON el String body
            JSONObject dataBody = null;
            if(body != null) {
                dataBody = new JSONObject(body);
            }

            AuthorizationAgent authorization = MobileBackendManager.getManager()
                    .getDefaultMobileBackend(getCurrentActivity())
                    .getAuthorization();
            if(authorization != null && authorization.isAuthorized())
                authorization.invokeCustomCodeJSONRequest(genericCustomCodeClientCallBack, dataBody, apiEndPoint, method);
            else
                callback.invoke(false, "Es necesario que el usuario inicie sesión");

        } catch (Exception e) {
            e.printStackTrace();
            callback.invoke(false, e.getMessage());
        }
    }

    private RestClient.HttpMethod getHttpMethod(int type) throws Exception {

        RestClient.HttpMethod method = null;

        switch (type) {
            case HTTP_METHOD_GET:
                method = RestClient.HttpMethod.GET;
                break;
            case HTTP_METHOD_DELETE:
                method = RestClient.HttpMethod.DELETE;
                break;
            case HTTP_METHOD_PATCH:
                method = RestClient.HttpMethod.PATCH;
                break;
            case HTTP_METHOD_PUT:
                method = RestClient.HttpMethod.PUT;
                break;
            case HTTP_METHOD_POST:
                method = RestClient.HttpMethod.POST;
                break;
            default:
                new Exception("Debe indicar el HttpMethod");
        }
        return method;
    }

}
