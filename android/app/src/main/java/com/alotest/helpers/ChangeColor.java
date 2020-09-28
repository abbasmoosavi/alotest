package com.alotest.helpers;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ChangeColor extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public ChangeColor(@NonNull ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ChangeColor";
    }

    @ReactMethod
    public void setMode(String mode) {

        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(reactContext.getApplicationContext());
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString("colorMode", mode);
        editor.apply();
        String m = preferences.getString("colorMode", "");

    }
}
