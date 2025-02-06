import React from 'react'

export default function About() {
    return (
        <div className="container mt-4">
            <h2 className="text-primary">About Us - TextUtils</h2>
            <p className="mt-3">
                TextUtils is a powerful and user-friendly text manipulation tool designed to make text processing quick and efficient.
            </p>

            <h4 className="mt-4">🔹Features of TextUtils:</h4>
            <ul className="list-group">
                <li className="list-group-item">✔ Convert Text to Uppercase & Lowercase</li>
                <li className="list-group-item">✔ Remove Extra Spaces</li>
                <li className="list-group-item">✔ Capitalize Words</li>
                <li className="list-group-item">✔ Reverse Text</li>
                <li className="list-group-item">✔ Find & Replace</li>
                <li className="list-group-item">✔ Text-to-Speech</li>
                <li className="list-group-item">✔ Download Text as a File</li>
                <li className="list-group-item">✔ Character, Word & Sentence Count</li>
                <li className="list-group-item">✔ Vowel & Consonant Count</li>
            </ul>

            <h4 className="mt-4">🛠 Technologies Used:</h4>
            <ul className="list-inline">
                <li className="list-inline-item badge bg-primary p-2">React.js</li>
                <li className="list-inline-item badge bg-secondary p-2">Bootstrap</li>
            </ul>

            <h4 className="mt-4">👨‍💻 About the Creator:</h4>
            <p>This project is developed by <b>Arachana Kumari</b>, aiming to provide a simple yet powerful text processing tool that enhances efficiency in everyday tasks.</p>
        </div>
    )
}
