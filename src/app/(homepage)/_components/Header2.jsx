"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import React from "react";

export default function Header2({ id }) {
    const [currentId, setCurrentId] = useState(id);

    useEffect(() => {
        console.log("Component mounted or updated, id:", currentId);
    }, [currentId]);

    function handleChangeFavorite() {
        console.log("Clicked ID:", currentId);  // Log id when Star is clicked
    }

    return (
        <div className="w-full h-full flex justify-between pl-10 pr-10 items-center text-2xl">
            <p>HRD Design</p>
            <Star onClick={handleChangeFavorite} size={20} className="cursor-pointer" />
        </div>
    );
}
