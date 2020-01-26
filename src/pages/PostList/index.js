import React, { useState, useEffect } from "react";

import Publication from "../../components/Publication";

import Avatar from "../../assets/avatar.png";

const initialState = {
  posts: [
    {
      id: 1,
      author: {
        name: "Mateus guilherme",
        avatar: Avatar
      },
      date: "26 Jan 2020",
      content: "O que é o Lorem Ipsum?",
      comments: [
        {
          id: 1,
          author: {
            name: "Tifany Karen",
            avatar: Avatar
          },
          content:
            " Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."
        },
        {
          id: 2,
          author: {
            name: "Sheila Fernanda",
            avatar: Avatar
          },
          content:
            " Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas."
        },
        {
          id: 3,
          author: {
            name: "Roosevelt Souza",
            avatar: Avatar
          },
          content:
            " Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Roosevelt Souza",
        avatar: Avatar
      },
      date: "26 Jan 2020",
      content: "O que é o Lorem Ipsum?",
      comments: [
        {
          id: 1,
          author: {
            name: "Tifany Karen",
            avatar: Avatar
          },
          content:
            " Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."
        },
        {
          id: 2,
          author: {
            name: "Sheila Fernanda",
            avatar: Avatar
          },
          content:
            " Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas."
        },
        {
          id: 3,
          author: {
            name: "Roosevelt Souza",
            avatar: Avatar
          },
          content:
            " Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão."
        }
      ]
    }
  ]
};

export default function PostList() {
  const [posts] = useState(initialState.posts);

  useEffect(() => console.log(posts));

  return (
    <>
      {posts.map(post => (
        <Publication key={post.id} post={post} />
      ))}
    </>
  );
}
