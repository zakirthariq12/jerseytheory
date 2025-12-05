import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Kasun Perera",
    rating: 5,
    comment: "Amazing quality jerseys! Got my Ronaldo Man United kit and it looks exactly like the original. Fast delivery too!",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Dilshan Fernando",
    rating: 5,
    comment: "Best place to buy retro jerseys in Sri Lanka. The Barcelona 08/09 jersey is pure class. Will definitely order again!",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Amal Silva",
    rating: 4,
    comment: "Great customer service and the jersey quality exceeded my expectations. Highly recommended!",
    date: "2 weeks ago",
  },
  {
    id: 4,
    name: "Nuwan Jayawardena",
    rating: 5,
    comment: "Ordered 3 jerseys and got 1 free! The deal is amazing and all jerseys are top quality. Love it!",
    date: "3 weeks ago",
  },
  {
    id: 5,
    name: "Tharuka Bandara",
    rating: 5,
    comment: "Island-wide delivery was super fast. The Real Madrid dragon jersey is absolutely stunning!",
    date: "1 month ago",
  },
  {
    id: 6,
    name: "Chamara Rathnayake",
    rating: 4,
    comment: "Very happy with my purchase. The fabric quality is excellent and fits perfectly. Thank you Jersey Theory!",
    date: "1 month ago",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust Jersey Theory for their football jersey needs
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-bold text-lg">4.9</span>
            <span className="text-muted-foreground">(500+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-4">{review.comment}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
