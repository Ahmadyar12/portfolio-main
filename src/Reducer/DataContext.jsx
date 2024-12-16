import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../util/Firebase";
import PortfolioCard from "../Components/Portfolio/PortfolioCard"

const Databasestore = createContext();
//Databasestore is the context. It allows you to share the data (skills) globally in your app without passing props manually.
export const Dataprovider = ({ children }) => {
    const [getSkill, setgetSkill] = useState([]);
    const [getPortfolio, setportfolio] = useState([]);
    const [getExperience, setGetExperience] = useState([]);
    const [getLanguage, setGetLanguage] = useState([]);
    const [getQuestion, setGetQuestion] = useState([]);
    const [getAboutMe, setGetAboutMe] = useState([]);
    useEffect(() => {

        //it fetch skill data
        const skills = onSnapshot(collection(db, "skills"),
            (snapshot) => {
                const skillsdata = snapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                }));
                setgetSkill(skillsdata);
            });
        //it fetch PortfolioCard data
        const portfolioo = onSnapshot(collection(db, "PortfolioCard"), (snapshot) => {
            const portfol = snapshot.docs.map((item) => ({

                id: item.id,
                ...item.data()

            }))
            setportfolio(portfol)
        })
        const Experiencedata = onSnapshot(collection(db, "Experiences"), (snapshot) => {
            const Experiences = snapshot.docs.map((item) => ({

                id: item.id,
                ...item.data()

            }))
            setGetExperience(Experiences)
        })
        const Languagedata = onSnapshot(collection(db, "Language"), (snapshot) => {
            const Languages = snapshot.docs.map((item) => ({

                id: item.id,
                ...item.data()

            }))
            setGetLanguage(Languages)
        })
        const Questiondata = onSnapshot(collection(db, "Questions"), (snapshot) => {
            const Ques5tionss = snapshot.docs.map((item) => ({

                id: item.id,
                ...item.data()

            }))
            setGetQuestion(Ques5tionss)
        })
        const AboutMe = onSnapshot(collection(db, "AboutMe"), (snapshot) => {
            const Aboutmee = snapshot.docs.map((item) => ({

                id: item.id,
                ...item.data()

            }))
            setGetAboutMe(Aboutmee)
        })
        // Proper cleanup for listener
        return () => {
            skills();
            portfolioo();
            Experiencedata();
            Languagedata();
            Questiondata();
            AboutMe();
        };
    }, []);
    return (
        <Databasestore.Provider value={{ getSkill, getPortfolio, getExperience, getLanguage, getQuestion, getAboutMe }}>
            {children}
        </Databasestore.Provider>

    );
};

export function useData() {
    return useContext(Databasestore);
}
