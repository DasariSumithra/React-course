import React from "react";

function Card({ username = "HC", post = "Not assigneed" }) {
  //console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          src="https://avatars.githubusercontent.com/u/11613311?v=4"
          alt=""
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur impedit reiciendis facere repellat voluptas cupiditate
              ea eveniet quia quo, sapiente explicabo nesciunt. Animi corporis
              quo dolore officia incidunt expedita laudantium.
            </p>
          </blockquote>
          <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div>{username}</div>
                <div>{post}</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </figure>
    </div>
  );
}

export default Card;
