import axios from "axios";

export default axios.create({

    baseURL: "https://api.yelp.com/v3/businesses",

    headers: {

        Authorization: 
            "Bearer F74KFJ-oLD0L7KNqeE0bbuyya-Bh5iERKcTsZAKhszts_iuZYkKY17NlnRjhsgJLNz6YqN48M2ubbDmuN--WYXT7xrP_TlMVDL8iEZoGmkSUCn65bmFn2g7WDxFIY3Yx"
    }

});