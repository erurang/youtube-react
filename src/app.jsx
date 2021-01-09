import React, { useEffect, useState } from "react"
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css"

function App({ youtube }) {

  // state ={} 와 같음. [변수명,변화를 적용할 변수명]
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube//
      .search(query)//
      .then(videos => setVideos(videos))

  }

  // didmount upadate의 2가지 기능을 가지고있음 , 2번째 인자는 어떤것이 업데이트될때 2가지 기능을 업데이트할건지 정함
  useEffect(() => {
    console.log("useEffect");
    youtube//
      .mostPopular() //
      .then(videos => setVideos(videos))
  }, [])



  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  )
}

export default App