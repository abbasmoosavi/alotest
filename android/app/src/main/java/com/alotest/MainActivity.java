package com.alotest;

import android.content.SharedPreferences;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import android.content.Intent;
import android.preference.PreferenceManager;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "alotest";
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(this);
        String mode = preferences.getString("colorMode", "dark");
        if (mode.equals("dark")) {
            SplashScreen.show(this, R.style.SplashDark);
        } else {
            SplashScreen.show(this, R.style.SplashLight);
        }
        super.onCreate(savedInstanceState);
    }
}
