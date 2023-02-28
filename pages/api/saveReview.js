import axios from "axios";
import fs from "fs";
import { join } from "path";

export default async function handler(req, res) {
  const { review, rating } = req.body;
  console.log("tttttt");

  if (!review || !rating) {
    res
      .status(400)
      .json({ error: "Missing parameters: review and rating are required" });
    return;
  }


  const timestamp = new Date().toISOString();

// Create an object containing the review data
const reviewData = {
  timestamp: timestamp,
  rating: rating,
  review: review
};

// Read the existing reviews from the JSON file
// const filePath = join(process.cwd(), "widgetfinal2", "UserReviews.json");
const filePath = "UserReviews.json";
let reviews = [];
if (fs.existsSync(filePath)) {
  const reviewsJson = fs.readFileSync(filePath);
  if (reviewsJson) {
    reviews = JSON.parse(reviewsJson);
  }
 
}

// Add the new review data to the array
reviews.push(reviewData);

// Save the updated reviews array to the JSON file
const reviewsJson = JSON.stringify(reviews);
fs.writeFileSync(filePath, reviewsJson);


  // const timestamp = new Date().toISOString();

  // const data = `${timestamp} | Rating: ${rating}/5 | Review: ${review}\n`;

  // const filePath = join(process.cwd(), "widgetfinal2", "UserReviews.txt");

  // fs.appendFile(filePath, data, (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Error appending review to file" });
  //     return;
  //   }

  //   res.status(200).json({ message: "Review added successfully" });
  // });

  res.status(200).json({ message: "Review added successfully" });
  //  res.send("ok");

  //  res.status(200).json({ response });
}
