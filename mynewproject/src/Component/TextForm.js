import React, { useState } from 'react';


export default function TextForm(props) {
    const UppercaseClick = () => {
        console.log("you clicked Upper case button");
        let newtext = text.toLocaleUpperCase();
        setText(newtext);

    }
    const LowercaseClick = () => {
        console.log("you clicked Upper case button");
        let newtext = text.toLocaleLowerCase();
        setText(newtext);

    }
    const handleRemoveSpaces = () => {
        setText(text.replace(/\s+/g, ""));
    };
    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setWordCount(newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length);
    }
    const handleClearText = () => {
        setText("");
        setWordCount(0);
    };
    const handleCapitalizeWords = () => setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
    const handleReverseText = () => setText(text.split("").reverse().join(""));
    const handleVowelConsonantCount = () => {
        const vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
        const consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
        return { vowels, consonants };
    };
    const handleTextToSpeech = () => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    };
    const handleDownloadText = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "textutils_output.txt";
        link.click();
    };
    const handleSentenceCount = () => text.split(/[.!?]+/).filter(Boolean).length;
    const handleFindReplace = () => {
        setText(text.replaceAll(findText, replaceText));
    };

    const [text, setText] = useState('Enter Text Here');
    const [wordCount, setWordCount] = useState(0);
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");

    return (
        <>
            <div className="mb-3">
                <h1>{props.heding}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="9"></textarea>
            </div>
            <div className="mb-3">
                <button className='btn btn-primary mx-1' onClick={UppercaseClick}>Convert to Upper case</button>
                <button className='btn btn-primary mx-1' onClick={LowercaseClick}>Convert to Lower case</button>
                <button className='btn btn-primary mx-1' onClick={handleRemoveSpaces}>Remove Space</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear</button>
                <button className='btn btn-primary mx-1' onClick={handleCapitalizeWords}>Capitalize Words</button>
                <button className='btn btn-primary mx-1' onClick={handleReverseText}>Reverse Text</button>
                <button className='btn btn-primary mx-1' onClick={handleTextToSpeech}>Read Aloud</button>
                <button className='btn btn-primary mx-1' onClick={handleDownloadText}>Download Text</button>
            </div>
            <div className="row g-3">
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Find..." value={findText} onChange={(e) => setFindText(e.target.value)} />
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Replace with..." vvalue={replaceText} onChange={(e) => setReplaceText(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button className='btn btn-primary' onClick={handleFindReplace}>Replace</button>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
                Character Count: {text.length} | Word Count: {wordCount} | Sentence Count: {handleSentenceCount()}
            </p>
            <p className="mt-2 text-sm text-gray-600">Vowels: {handleVowelConsonantCount().vowels} | Consonants: {handleVowelConsonantCount().consonants}
            </p>
        </>
    )
}
