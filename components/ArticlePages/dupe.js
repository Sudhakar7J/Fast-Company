"use client"

import React, { useEffect, useState } from "react"

export function ArticlePreview() {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    fetch("http://localhost:1337/api/news-articles/id")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCarouselData(data)
        } else {
          console.error("Invalid carousel data:", data)
        }
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error)
      })
  }, [])

  return (
    <div>
      {Array.isArray(carouselData) ? (
        carouselData.map((post) => (
          <div key={post.id}>
            <h2>{post.category}</h2>
            <p>{post.title}</p>
            <p>{post.description}</p>

            <img src={post.imageUrl} alt={post.title} />
          </div>
        ))
      ) : (
        <p>No carousel data available.</p>
      )}
    </div>
  )
}

export default ArticlePreview
