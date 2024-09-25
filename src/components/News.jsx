import React from 'react'
import "../css/news.css"

const News = () => {

    let latestNews = [
        {
            image: "http://placehold.it/250x150&text=Recent_News",
            headline: "this is latest news",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam iusto maxime doloribus quas ut consequuntur mollitia natus vel. Animi, quisquam reiciendis.",
            date: "17 / 09 / 2024",
        },
        {
            image: "http://placehold.it/250x150&text=Recent_News",
            headline: "old news 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam iusto maxime doloribus quas ut consequuntur mollitia natus vel. Animi, quisquam reiciendis. Aliquid, sed architecto.",
            date: "17 / 09 / 2024",
        },
        {
            image: "http://placehold.it/240x180&text=old_news_1",
            headline: "old news 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam iusto maxime doloribus quas ut consequuntur mollitia",
            date: "14 / 09 / 2024",
        },
        {
            image: "http://placehold.it/240x180&text=old_news_1",
            headline: "old news 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam iusto maxime doloribus quas ut consequuntur mollitia",
            date: "7 / 09 / 2024",
        },
        {
            image: "http://placehold.it/250x160&text=old_news_2",
            headline: "old news 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam iusto maxime doloribus quas ut consequuntur mollitia",
            date: "03 / 09 / 2024",
        },
    ]

    return (
        <main className='newsPaper'>
            <h2 className='headings'>IEI Chronicle</h2>
            <div className="newsCanvas">
                <div className="latestNews">
                    <img src={latestNews[0].image} alt="" />
                    <div className="detail">
                        <h5>{latestNews[0].headline}</h5>
                        <p>{latestNews[0].description}</p>
                        <span>{latestNews[0].date}</span>
                    </div>
                </div>

                <div className="previousNews">

                    {latestNews.slice(1, 5).map((item, index) => {
                        return (<div key={item.headline} >
                            <div className="oldNews">
                                <img src={item.image} alt="" />
                                <div className="oldDetail">
                                    <h5>{item.headline}</h5>
                                    <p>{item.description}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            {index != 3 && <hr style={{ margin: "5px 0px" }} />}
                        </div>
                        )
                    })}

                </div>
            </div>
        </main>
    )
}

export default News
