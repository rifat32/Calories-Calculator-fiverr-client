import axios from "axios";
import fs from "fs";
import { join } from "path";
export default async function handler(req, res) {
  var { age, sex, activityLevel, weight, goalWeight, height, timeToReachGoal } = req.body;
  console.log(age)

  try {
    const prompt = `User: I'm a ${age} year old ${sex}, my activity level is ${activityLevel} (considering 1 being not active at all, 5 being very active), I weigh ${weight} & I'm ${height} tall. I would like to get to a weight of ${goalWeight} in ${timeToReachGoal} days. Please give me summaraized but effective response ?\nBot : `;
    
    let { data } = await axios({
      url: "https://api.openai.com/v1/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
      data: {
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 750,
        temperature: 0.7,
      },
    });

    let response = data.choices[0].text.trim();
  
    
    const filename = "conversations.json";
    const timestamp = new Date().toISOString();
    const conversation = {
      timestamp:timestamp,
      prompt: prompt,
      response: response
    };
    let conversations = [];
    if (fs.existsSync(filename)) {
      const conversationsJson = fs.readFileSync(filename);
      conversations = JSON.parse(conversationsJson);
    }
    
    // Add the new conversation to the array
    conversations.push(conversation);
    
    // Save the updated conversations array to the JSON file
    const conversationsJson = JSON.stringify(conversations);
    fs.writeFileSync(filename, conversationsJson);





    // Save the prompt and response to a text file
    // const filename = "conversation.txt";
    // const content = `${prompt}\n${response}\n\n`;
    // fs.appendFileSync(filename, content);

    res.status(200).json({ response });
  } catch (e) {
    console.log(e.response);
    res.status(400).send(e);
  }
}
