import './Numbers.sass';

export const Numbers = () => {
    return (
        <div id="numbers">
            <div className="numbers_container">
                <text className="text_of_Numbers">
                    Our students choose us because they trust our rich history
                    in the ballet training market. With our many years of experience,
                    we create unique educational programs that reflect a high standard of quality and reliability.
                </text>

                <div>
                    <text className="numbers_years">
                        14+
                    </text>

                    <text className="years">
                        Years of teaching
                    </text>
                </div>

                <div>
                    <text className="numbers_world">
                        3x
                    </text>

                    <text className="world">
                        World champions
                    </text>
                </div>

                <div>
                    <text className="numbers_students">
                        1400+
                    </text>

                    <text className="students">
                        Students
                    </text>
                </div>
            </div>
        </div>
    )
}