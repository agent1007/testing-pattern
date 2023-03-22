import spb from '../../images/spb.jpg'
import moskau from '../../images/moskau.jpg'
import volgograd from '../../images/volgograd.jpg'
import znamensk from '../../images/znamensk.jpg'


const ElementsInteresting = [
    {
        link: spb,
        name: "Санкт-Петербург.",
        author: "Черкасов Павел",
        _id: 1,
        titleDeu: "St. Petersburg ist eine kalte Stadt.",
        titleRu: "Санкт-Петербург - холодный город.",
        likes: [1,2],
    },
    {
        link: moskau,
        name: "Москва.",
        author: "Черкасова Яна",
        _id: 2,
        titleDeu: "Moskau ist die Hauptstadt unserer Heimat.",
        titleRu: "Москва - столица нашей родины.",
        likes: [1,2,3,4],
    },
    {
        link: volgograd,
        name: "Волгоград.",
        author: "Воловин Вилен",
        _id: 3,
        titleDeu: "In dieser Stadt nehme ich Autoteile mit.",
        titleRu: "В этом городе я забираю автозапчасти.",
        likes: [1,1,1,1,1,1,1],
    },
    {
        link: znamensk,
        name: "Знаменск.",
        author: "Черкасов Лев",
        _id: 4,
        titleDeu: "Meine Großeltern leben in dieser Stadt.",
        titleRu: "В этом городе живут мои бабушки и дедушки.",
        likes: [1,1,1,1,1,1,1,1,1,1,1],
    }
]
export default ElementsInteresting;


