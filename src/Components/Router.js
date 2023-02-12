import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookMatchingInterface from "../Routes/BookMatchingInterface";
import UserInputForm from "../Routes/UserInputForm";
import UserLogin from "../Routes/UserLogin";

export default function Router(){
    return (
        <section>
            <Routes>
                <Route path="/" element = {<UserLogin />} />
                <Route path="/userInput" element = {<UserInputForm />} />
                <Route path="/bookMatchingInterface" element = {<BookMatchingInterface />} />
            </Routes>
        </section>
    )
}