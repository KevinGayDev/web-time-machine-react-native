import React from "react"
import { Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const dateFormatting = Intl.DateTimeFormat("fr-FR", 
{
    dateStyle: "short"
});

import styles from "../styles/style_Preview"
  
export default function PreviewScreen({ route })
{
    const { url } = route.params;

    const ActivityIndicatorElement = () => {
        return (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.activityIndicatorStyle}
          />
        );
      };

    return (
        <WebView
        style={styles.webView}
        source={{ uri: url }}
        // View to show while loading the webpage
        renderLoading={ActivityIndicatorElement}
        // Want to show the view or not
        startInLoadingState={true}
        />
    );
}