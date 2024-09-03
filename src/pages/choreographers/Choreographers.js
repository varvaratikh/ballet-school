import './Choreographers.sass';

import Lebedev from '../../assets/images/choreographers/image 5.png';
import Syromyatnikova from '../../assets/images/choreographers/image 7.png';
import Vygovskaya from '../../assets/images/choreographers/image 8.png';
import Boryaev from '../../assets/images/choreographers/image 6.png';
import Chernavina from '../../assets/images/choreographers/image 10.png';
import Tkacheva from '../../assets/images/choreographers/image 9.png';


export const Choreographers = () => {
    return(
        <div className="container_chore">
            <text className="Choreographers">
                Choreographers
            </text>

            <text className="ballet">
                ballet
            </text>

            <div className="photo_choreographers">
                <img className="one" src={Lebedev} />
                <img className="two" src={Vygovskaya} />
                <img className="three" src={Chernavina} />
                <img className="four" src={Syromyatnikova} />
                <img className="five" src={Boryaev} />
                <img className="six" src={Tkacheva} />
            </div>

            <div className="name_choreographers">
                <text className="Lebedev">Lebedev Timur Mikhailovich</text>
                <text className="Vygovskaya">Vygovskaya Daria Ivanovna</text>
                <text className="Chernavina">Chernavina Evgenia Andreevna</text>
                <text className="Syromyatnikova">Syromyatnikova Anna Valerievna</text>
                <text className="Boryaev">Boryaev Artur Vladimirovich</text>
                <text className="Tkacheva">Tkacheva Anastasia Yurievna</text>
            </div>

            <div>
                <text className="Lebedev_position">Studio director</text>
                <text className="Vygovskaya_position">Teacher</text>
                <text className="Chernavina_position">Teacher</text>
                <text className="Syromyatnikova_position">Studio director</text>
                <text className="Boryaev_position">Teacher</text>
                <text className="Tkacheva_position">Teacher</text>
            </div>

            <div>
                <text className="Lebedev_text">
                    Education: St. Petersburg State Technical University (Polytechnics),
                    Department of TVN and State Pedagogical University. Studio director
                    since 2011. Teacher of the Russian State Pedagogical University named
                    after. Herzen Department of Contemporary Choreography.
                </text>

                <text className="Vygovskaya_text">
                    Since the age of 15, she has been working as a director-choreographer in her
                    native group “Modern Dance Theater Dancer”. She attended master classes from
                    top choreographers - Adam Sevani, MADD Chadd, BLACKA DI DANCA, Parris Goebel and others.
                </text>

                <text className="Chernavina_text">
                    Since 2007 ballet dancer in the theaters: Russian Ballet, Vanemuine.
                    In 2012 she graduated from the Producing Faculty of St. Petersburg State
                    Technical University. In 2017, Russian State Pedagogical University named
                    after. A. I. Herzen, majoring in “Choreographic Art”.
                </text>

                <text className="Syromyatnikova_text">
                    Graduated from the St. Petersburg University of Culture and Arts, Faculty
                    of Variety Musical Art. Since 2005, she has been a teacher in dance studios
                    in St. Petersburg. Since 2010, studio teacher. In 2021, she completed training
                    in working with children under the Presidential Grants program.
                </text>

                <text className="Boryaev_text">
                    1988 – 2008 – leading soloist of academic theaters in Russia; 2006 - higher
                    pedagogical education, and after - teacher of the preparatory department of
                    the Academy of Russian Ballet named after A.Ya. Vaganova. 2013 – laureate
                    of the competition of pedagogical achievements “EDUCATION”.
                </text>

                <text className="Tkacheva_text">
                    Education: Pedagogical education in the field of choreography, bachelor's
                    degree with honors, department of choreography, Institute of Music, Theater
                    and Choreography of the Russian State Pedagogical University named after. Herzen.
                </text>

            </div>

        </div>
    )
}