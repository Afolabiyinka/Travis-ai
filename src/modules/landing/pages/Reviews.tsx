import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  role?: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Ayo",
    rating: 5,
    role: "Student",
    comment:
      "I used it to explain why I didn’t submit my assignment… lecturer actually believed it 😭",
  },
  {
    id: 2,
    name: "Zainab",
    rating: 4,
    role: "Student",
    comment:
      "Saved me from trouble when I said my phone was ‘confiscated for repair’... smooth 😂",
  },
  {
    id: 3,
    name: "Daniel",
    rating: 5,
    role: "Developer",
    comment:
      "Used it to excuse missing a meeting. It generated a story so realistic I started believing it myself 💀",
  },
  {
    id: 4,
    name: "Precious",
    rating: 5,
    role: "Freelancer",
    comment:
      "Client was angry but the excuse Travis AI generated calmed everything down. Dangerous tool 😂",
  },
];

export default function ReviewSwiper() {
  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4">
            Loved by thousands
          </h2>
          <p className="text-muted-foreground text-xl font-light">
            See what our users have to say about Travis AI
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col gap-4">

                {/* Top row: Stars + quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-muted text-muted"
                        }
                      />
                    ))}
                  </div>
                  <svg
                    className="text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-300"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 8.515 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 22.515 10 24 10V8z" />
                  </svg>
                </div>

                {/* Comment */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {review.comment}
                </p>

                {/* Divider */}
                {/* <Separator /> */}

                {/* Author */}
                <div className="flex items-center gap-3 pt-1">
                  <Avatar className="h-9 w-9 border-2 border-primary/20 ring-2 ring-background">
                    <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight truncate">
                      {review.name}
                    </p>
                    {review.role && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {review.role}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}