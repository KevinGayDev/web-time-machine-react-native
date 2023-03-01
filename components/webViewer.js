import React from "react"
import { Text, View, TouchableOpacity } from 'react-native';

import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
const dateFormatting = Intl.DateTimeFormat("fr-FR", 
{
    dateStyle: "short"
});

import styles from "../styles/style_WebView"
  
export default function WebViewResult({viewStamp, viewURL, URL})
{
    let goodDate;
    const [result, setResult] = React.useState(null);
    const navigation = useNavigation();

    // Get the date sent by the API and format it to display the snapshot date
    function getDateFromTimeStamp()
    {
        if (viewStamp !== null)
        {
            return goodDate = viewStamp.slice(6,8) + "/" + viewStamp.slice(4,6) + "/" + viewStamp.slice(0,4) + " à " + viewStamp.slice(8,10) + ":" + viewStamp.slice(10,12) + ":" + viewStamp.slice(12,14);
        }
    }
    getDateFromTimeStamp();

    function previsualizeWebsite (siteSearched)
    {
        navigation.navigate('Details', {url:siteSearched});
    }
    
    async function openSiteInBrowser (siteSearched)
    {
        try{
            let result = await WebBrowser.openBrowserAsync(siteSearched);
            setResult(result);
        }
        catch (error)
        {
            console.log(error);
        }
    } 

    return (
        <View style = {styles.container}>
           <View style = {styles.resultSearch}>
                <Text>Site demandé : {URL}</Text>
                <Text>Par rapport à la date demandée :</Text>
                <Text>Date de la snapshot la plus proche : {goodDate}</Text>
            </View>
            <View style = {styles.buttonRow}>
                <TouchableOpacity onPress = {()=> previsualizeWebsite(viewURL)}
                style = {styles.pressable}>
                    <Text>Prévisualiser</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> openSiteInBrowser(viewURL)}
                style = {styles.pressable}>
                    <Text>Ouvrir sur navigateur</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}