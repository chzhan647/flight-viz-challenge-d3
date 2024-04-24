# Flight Incidents using D3 Visualization
I've always wanted to do data journalism creating a story using interative and fun visualization, like what [pudding](https://pudding.cool/) does. To unlock unlimited creative potential when telling a story, D3 is a great tool. But learning D3 from scratch is not easy. D3 requires knowledges in HTML, CSS and Javascript, and often the online tutorials are outdated. 
I want to start practicing and sharing daily practices and challenges from learning D3 with a prompt to tell a story about commercial flight incidents involving Boeing and Airbus 

### Prompt 
Things are not looking good for Boeing lately starting with the shocking door plug fell out of a Boeing 737 Max 9. Ever since then, Boeing has had a string of incidents reported leading the public to question its quality and safety. As someone who recently overcame the fear of flying developed 5 years ago, the news only refueled my fears. But as I closely followed commercial flight news in the past few years, I find myself wonering whether theres been an actual increase in incidents involving commercial planes, or if we're simply more aware of them due to the rapid information sharing through social media. 

### Data 

#### NTSB Accident Data
National Transportation Satefy Board (NTSB) provides latest aviation accident investigation primarily in U.S. I will be using the accident data from 2010 to April 2024.  

#### NTSB Accident Report 
Detailed accident report conducted by investigators at the scene is embedded in some accidents. The report is in PDF format. To extract the information, I'm planning to use LLM to summarize the texts into a structural data format 

#### Boeing vs Airbus Delivery Data 
It would be unfair to simply say Boeing has more incidents. Boeing has about 58% market share (reference). It's challenging to find out how many airplanes by each commercial airline company currently in operation and the frequency of operations. But the order and delivery data is available to public. I will use deliveries as an estimate for numbers of airplanes in operation when calculating the incident rates. 

#### API offered by private companies 
Companies like FlightAware offers different tiers of API plans. Might explore 