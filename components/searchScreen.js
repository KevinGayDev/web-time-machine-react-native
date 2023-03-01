import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import WebSnapshot from "../components/webViewer.js"
import styles from "../styles/style_Search"
import moment from 'moment';

export default function Search() 
{
    const [siteName, setSiteName] = React.useState("");

    const [date, setDate] = useState(new Date(1598051730000));
    const [showCalendar, setShowCalendar] = useState(false);

    const [searchResult, setSearchResult] = useState([]);
    const [searchDone, setSearchDone] = React.useState(false);

    function openCalendar ()
    {
        setShowCalendar(true);
    }

    function changeDate (event, selectedDate)
    {
        setShowCalendar(false);
        setDate(selectedDate);
    }

    async function searchArchive ()
    {
        if (siteName === "")
        {
            return Alert.alert("Site non renseigné");
        }
        let site = siteName.toLowerCase();
        site = siteName.replaceAll(" ", "");
        let formattedDate = moment(date).format('YYYYMMDDHHMMSS');
        const response = await fetch(`http://archive.org/wayback/available?url=${site}.com&&timestamp=${formattedDate}`);
        const datas = await response.json();
        setSearchResult(datas);    
        setSearchDone(true);
    }
    
    
    return (
    <KeyboardAvoidingView style = {styles.container}>
        <StatusBar style = "auto" />
            <View style = {styles.header}>
            <Text style = {styles.whiteText}>Recherche</Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {styles.searchSite}>
                <View style = {styles.inputFields}>
                    <Text style = {styles.inputText}>Nom du site</Text>
                    <TextInput style = {styles.input}
                    onChangeText = {setSiteName}
                    value = {siteName}
                    placeholder = "Entrer un nom de site (sans www ou .com)"
                    keyboardType = "default"
                    />
                </View>
                <Text style = {styles.date}>Date sélectionnée : {date.toLocaleString()}</Text>     
                <View style = {styles.inputFields}>
                
                    <TouchableOpacity style = {styles.datePressable} 
                        onPress = {openCalendar}>
                        <Text>Choisir une date</Text>
                    </TouchableOpacity>
                    {showCalendar && (
                        <DateTimePicker
                        value={date}
                        mode="date"
                        onChange={changeDate}
                        maximumDate={new Date(2030, 10, 20)}
                        minimumDate={new Date(1970, 0, 1)}
                        />
                    )}
                </View>    
                
                <TouchableOpacity  style = {styles.searchPressable}
                onPress = {searchArchive}>
                <Text>Lancer la recherche</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        {searchDone && (
            <View style = {styles.searchResult}>
            <Text style = {styles.centeredText}>Résultat(s)</Text>
            <View style = {styles.container}>
            <WebSnapshot 
                viewStamp = {searchResult.archived_snapshots.closest.timestamp} 
                viewURL = {searchResult.archived_snapshots.closest.url} 
                URL = {searchResult.url}             
                />
            </View>
        </View>
        )}      
    </KeyboardAvoidingView>
  );
}