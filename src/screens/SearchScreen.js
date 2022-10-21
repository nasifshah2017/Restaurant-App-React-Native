import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState("");   // Term here refers to the text we are searching on the Search Bar
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {

        // price === "$" || "$$" || "$$$"

        return results.filter(result => {

            return result.price === price;

        });
    };
    
    return (

        <>

            <SearchBar 

                term={term} 

                onTermChange={setTerm}

                onTermSubmit={() => searchApi(term)}
                
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice("$")} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice("$$")} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice("$$$")} 
                    title="Big Spender"
                />
            </ScrollView>

        </>

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


// useEffect's Second Argument

// 1. useEffect(() => {}):          Run the arrow function "every time" the component 
//                                  is rendered

// 2. useEffect(() => {}, [ ]):     Run the arrow function "only" when the component 
//                                  is "first" rendered

// 3. useEffect(() => {}, [value]): Run the arrow function "only" when the component 
//                                  is "first" rendered, "and" when the "'value' changes"