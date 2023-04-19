import moment from "moment";
import { useState } from "react";

const lifespan = 90;

const Dot = ({ lived = false }) => {
    return (
        <div
            className={`w-4 aspect-square rounded-full ${
                lived
                    ? "bg-red-500"
                    : "bg-transparent border-solid border-2 border-red-500"
            }`}
        />
    );
};

function App() {
    const [selectedDate, setSelectedDate] = useState("1975-06-01");
    const [viewMode, setViewMode] = useState("years");

    let dateOfBirth = moment(new Date(selectedDate));
    let yearsLived = moment().diff(dateOfBirth, "y");
    let monthsLived = moment().diff(dateOfBirth, "M");
    let weeksLived = moment().diff(dateOfBirth, "w");

    const weeksLivedArray = Array(weeksLived).fill(true);
    const monthsLivedArray = Array(monthsLived).fill(true);
    const yearsLivedArray = Array(yearsLived).fill(true);
    const weeksToLive = Array(lifespan * 52 - weeksLived).fill(true);
    const monthsToLive = Array(lifespan * 12 - monthsLived).fill(true);
    const yearsToLive = Array(lifespan - yearsLived).fill(true);

    return (
        <div className="relative flex justify-center px-12 py-6">
            <div className="flex justify-start items-center flex-col relative min-h-screen backdrop-blur-sm max-w-[280px]">
                <h1 className="mb-4 font-bold text-4xl text-center tracking-tight">
                    Your Life in Dots
                </h1>
                <p className="mb-2 tracking-tight leading-5">
                    Select your birthdate and what each dot should represent:
                </p>
                <input
                    type="date"
                    className="mb-2 border-solid border-black border-2 rounded-md text-center w-32 self-end"
                    defaultValue={"1975-06-01"}
                    onChange={(e) => {
                        setSelectedDate(e.target.value);
                    }}
                />
                <select
                    onChange={(e) => setViewMode(e.target.value)}
                    className="mb-4 border-solid border-black border-2 rounded-md text-center w-24 self-end"
                >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                    <option value="weeks">Weeks</option>
                </select>
                <div className="grid grid-cols-12 gap-x-2 gap-y-2 place-items-center">
                    {viewMode === "years" &&
                        yearsLivedArray.map((_, i) => <Dot key={i} lived />)}
                    {viewMode === "years" &&
                        yearsToLive.map((_, i) => <Dot key={i} />)}
                    {viewMode === "months" &&
                        monthsLivedArray.map((_, i) => <Dot key={i} lived />)}
                    {viewMode === "months" &&
                        monthsToLive.map((_, i) => <Dot key={i} />)}
                    {viewMode === "weeks" &&
                        weeksLivedArray.map((_, i) => <Dot key={i} lived />)}
                    {viewMode === "weeks" &&
                        weeksToLive.map((_, i) => <Dot key={i} />)}
                </div>
            </div>
            <div className="w-[100px] aspect-square bg-medium-acqua absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
        </div>
    );
}

export default App;
