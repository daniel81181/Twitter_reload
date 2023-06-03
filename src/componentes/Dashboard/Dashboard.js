import React, { Suspense, useEffect, useState } from "react";
import './Dashboard.css'





export const Dashboard= () => {


    return (
        <div className="dashboard-container">
            <h2>Welcome to the Dashboard of Twitter Better</h2>
            <p><h3>User with most interactions:</h3> @daniel81181</p>
            <p><h3>Popular Tweet</h3>Twitter, Inc. was an American social media company based in San Francisco, California. <h1>@daniel811815</h1></p>
            <p><h3>User active on this day: 10</h3> </p>

        </div>

    );
}

export default Dashboard;

