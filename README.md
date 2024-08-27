# Project-3
**Columbia University Bootcamp Project 3**

  # Analysis of COVID-19 Death Toll in the US   


## Abstract: 
The overall effect of COVID-19 was both catastrophic and frightening to the world but, the focal point will be the United States of America. What is COVID-19 and why was this such a devastating disease that took the world by surprise. To start, it is important to know what COVID-19 also known as SARS-CoV-2 virus. The COVID-19 virus is a virus that can let the infected individual having to face “mild to moderate respiratory illness and recover without requiring special treatment.” (Coronavirus (who.int)) To say, the least that COVID-19 did not impact the United States based on this definition of the virus by W.H.O. is a falsehood; the effect that COVID-19 had on the world and specifically, the United States is clearly shown in the aftermath of the pandemic and the death toll that is still occurring at present times. The visualization provided in the project is to provide an illustration of the devastating losses that the United States as a whole and individual states had to endure throughout 2020-2023. There will be a display of the differences of the Death toll with the Top 5 highest states and the Bottom 5 lowest states. There will be a visual representation of the United States map; overall there will be the death ratio of each state, the population, and the density that each state has. The additional visualizations will be focusing on the age group death tolls, illustrating the disparities in the number of deaths due to the ages. As well, the line graph will provide a clear view of the trend of the death tolls in which there a sharp inclines and declines as time passed.  In the end, the overall analysis of the COVID-19 Death toll of the United States between 2020-2023 serves as a reminder of the catastrophic impact that COVID-19 had on the United States. Not only, did this show the high levels of the death toll during these times but, it shows that even after the pandemic and abrupt halt that it brought to the US, that this is still affecting the United States to this day. This analysis is to let us know of the importance of the devastation that can occur and the value of coming together to prevent any further healthcare calamities that may come. 

**Ehtical Considerations**
    The COVID-19 (SARS-CoV2 virus) was and is an unprecedented crisis that launched the United States into a frenzy that they are still dealing with the aftermath of this virus. Thorugh the interruption and halt of even the government itself at one point. There were still some considerations that needed to be taken into account to be able to respect the individuals that were affected by COVID-19. The anonymity of the individuals is maintained through the assistance of the HIPAA Act of 1996, there factors that were not taken into consideration to be able to determine the imapct of the death toll such as Racial/Ethnic identifiers. The focus of this information is to bring awareness to the death toll that impacted the United States as a whole but, the individuals that died due to this deadly virus, and give precaution, warning, and a message to the healthcare issues that affected The United States of America during the Pandemic of COVID-19. 

**This project will be covering The Death Toll in the United States within the years 2020-2023.** 

<p>
The code for the figures is named Data_Cleaning.ipynb (cleaned_covid_data.csv) 
</p>
<p>
Data for the death toll of the United States within the years 2020-2023 has been filtered to display the death toll in all the states; excluding U.S. territories (Puerto Rico & The District of Columbia). 
</p>

# Death Toll of COVID-19 

**The focal point of this topic will be the Death toll but, there are key points that will be discussed such as:**
<ol> 
  <li>COVID-19 Deaths in the United States (Per State). </li>
  <li>Top 5 States with the Highest Death Toll. </li>
  <li>Bottom 5 States with the Lowest Death Toll. </li>
  <li>COVID-19 Deaths in the United States According to Age Groups. </li>
  <li>Overview of Total COVID-19 Death Toll in the United States thru 2020-2023. </li>
</ol>

Once the data is filtered then, the next step is the removal of the categories/filters: (All ages, By Month, New York City, District of Columbia, Puerto Rico, United States, and Subcategory of COVID-19 (repetitive). This is to create a visual to illustrate the States of the United States and to avoid the data to display any outliers that would be displayed and remove redundancy. Afterwards, the following data (State, Year, and Month) is sorted to assist with the clarity of the information. Lastly, to be able to filter the null value to zero of the data if this may have been due to the data that may have been incomplete or missing.  

# Visualizations: 

**Choropleth Map of the United States:** 
This illustrates an overview of the map of the United States. There are various layers that can be added and taken away to show the death toll within each individual states compared to the rest. Also, the data shown for each individual state the population (during 2023), as well the density of those states and the overall death toll % (rate per 10,000). 

<ul>
  <li>Population of State (2023)</li>
  <li>Density within the State</li>
  <li>Death Toll % (Rate per 10,000)</li>
</ul>

**Bar Graph(s):**  
This illustration is regarding the disparities between the 50 states; in which the top 5 states with the highest death toll and consequently, the bottom 5 states with the least death toll overall. There are many contributing factors that could have led to these numbers but, it is important to note that there was no correlation between the number of the population and the death toll per state. The data demonstrates that there are various states with different numbers; in which there can be other inferences made due to this data that could be contributing factors. 

<ul>
  <li>Top 5 Higher Death Toll States</li>
  <li>Bottom 5 Lowest Death Toll States</li>
</ul>

**Pie Chart:** 
This graph is utilized to portray the different age groups that were noted within the dataset to illustrate that the individuals ages were contributing factors to the death toll. In, this visual aid it demonstrates that there is a higher propensity of the death toll due to the older that the individual was at their time of death. The older age groups that would be considered “Senior Citizens” 65- higher; they had higher death rates, compared to their younger counterparts. Death Toll across the Age Ranges: 

<ul>
  <li>0-24</li>
  <li>35-44</li>
  <li>45-54</li>
  <li>55-64</li>
  <li>65-74</li>
  <li>85+</li>
</ul>

**Line Graph:**  
COVID-19 Deaths 2020-2023 in the US: This visual representation demonstrates a timeline from January 2020 all the way through December 2023. Within this visualization it illustrates the overall inclines of the COVID-19 death toll such as when it first began in the United States. There is a display of the trends in which the declines were visible during the change of the seasons such as the Summertime. It is also to note that the inclines mainly began to occur during the change of the season and were high mainly during the Wintertime
<ul>
  <li>January 2020 - December 2023</li> 
</ul>

**Refrences**
<ul>
  <li>https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json?short_path=1c1ebe5</li>
  <li>https://catalog.data.gov/dataset/conditions-contributing-to-deaths-involving-coronavirus-disease-2019-covid-19-by-age-group</li>
  <li>https://www.who.int/health-topics/coronavirus</li>
</ul>
