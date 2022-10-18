import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [term, setTerm] = useState("");   // Term here refers to the text we are searching on the Search Bar
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {

        try {

            const response = await yelp.get("/search", {

                params: {

                    limit: 50,

                    term: searchTerm,

                    location: "san jose"
                }
            });

            setResults(response.data.businesses);

        } catch(err) {

            setErrorMessage("Something went wrong!");
        }

    };

    // Call searchApi when the component is first rendered. BAD CODE!

    // searchApi("pasta");

    return (

        <View>

            <SearchBar 

                term={term} 

                onTermChange={setTerm}

                onTermSubmit={() => searchApi(term)}
                
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We have found {results.length} results</Text>

        </View>

    )
};

const styles = StyleSheet.create({});

export default SearchScreen;


// Features of Fetch and Axios

// Fetch:

// 1. Built in function for making network requests

// 2. Error handling is a bit weird

// 3. Requires us to write a lot of wrapper code to make
//    it work 'sensibly'


// Axios:

// 1. Seperate library for making requests

// 2. Easy to us, sensible defaults

// 3. Increases our app size (very, very slightly)


// Flow in SearchScreen Component 

// - SearchScreen function  called

// - searchApi called immediately

// - Make request to yelp API

// - Get search results, call setter

// - Updated state causes component to re-render 