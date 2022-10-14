import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState("");   // Term here refers to the text we are searching on the Search Bar

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log("term was submitted")}/>
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;