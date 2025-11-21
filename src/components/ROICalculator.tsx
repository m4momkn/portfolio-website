import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, Users } from 'lucide-react';

const ROICalculator = () => {
    const [weeklyHours, setWeeklyHours] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(50);
    const [teamSize, setTeamSize] = useState(1);

    const [results, setResults] = useState({
        weeklySaved: 0,
        monthlyCost: 0,
        annualSavings: 0,
        roiTimeline: 0
    });

    useEffect(() => {
        const automationEfficiency = 0.8; // 80% efficiency
        const weeklyTimeSaved = weeklyHours * automationEfficiency;
        const weeklyCost = weeklyHours * hourlyRate * teamSize;
        const monthlyCost = weeklyCost * 4;
        const annualCost = monthlyCost * 12;
        const annualSavings = annualCost * automationEfficiency;
        const avgAutomationCost = 6000;
        const monthlySavings = monthlyCost * automationEfficiency;
        const roiTimeline = monthlySavings > 0 ? avgAutomationCost / monthlySavings : 0;

        setResults({
            weeklySaved: weeklyTimeSaved,
            monthlyCost: monthlyCost,
            annualSavings: annualSavings,
            roiTimeline: roiTimeline
        });
    }, [weeklyHours, hourlyRate, teamSize]);

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Input Section */}
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                    <Calculator size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-white">ROI Calculator</h2>
                            </div>

                            <p className="text-gray-400 mb-8">
                                See how much you could save by automating repetitive tasks.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
                                        <span>Weekly Manual Hours</span>
                                        <span className="text-accent">{weeklyHours} hrs</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="40"
                                        value={weeklyHours}
                                        onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>

                                <div>
                                    <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
                                        <span>Hourly Rate ($)</span>
                                        <span className="text-accent">${hourlyRate}/hr</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="200"
                                        step="5"
                                        value={hourlyRate}
                                        onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>

                                <div>
                                    <label className="flex justify-between text-sm font-medium text-gray-300 mb-2">
                                        <span>Team Members</span>
                                        <span className="text-accent">{teamSize} people</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="20"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                    Let's Build This Together
                                </button>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="bg-primary/50 p-8 md:p-12 flex flex-col justify-center border-l border-white/10">
                            <h3 className="text-xl font-bold text-white mb-8">Estimated Savings</h3>

                            <div className="space-y-6">
                                <motion.div
                                    key={results.annualSavings}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-white/5 p-6 rounded-xl border border-white/10"
                                >
                                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                                        <DollarSign size={18} />
                                        <span className="text-sm uppercase tracking-wider">Annual Savings</span>
                                    </div>
                                    <div className="text-4xl font-bold text-success">
                                        ${results.annualSavings.toLocaleString()}
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                                            <Clock size={16} />
                                            <span className="text-xs uppercase tracking-wider">Hours Saved/Wk</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            {results.weeklySaved.toFixed(1)}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                                            <Users size={16} />
                                            <span className="text-xs uppercase tracking-wider">ROI Timeline</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            {results.roiTimeline < 1 ? "< 1" : results.roiTimeline.toFixed(1)} mo
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-8 text-xs text-gray-500 text-center">
                                *Estimates based on 80% efficiency gain and average automation implementation costs.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
