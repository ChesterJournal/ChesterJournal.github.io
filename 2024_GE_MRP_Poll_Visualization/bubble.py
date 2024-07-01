import pandas as pd
import json

# Load the dataset
file_path = 'C:/Users/z0003/Documents/Work/Journalism/Test/YouGov_2024_general_election_MRP_2.xlsx'
data = pd.read_excel(file_path)

# Extract the required data
election_data = data[['area', 'WinnerGE2024', 'Winner margin']]

# Generate the data structure for the Highcharts
parties = {}
for index, row in election_data.iterrows():
    winner = row['WinnerGE2024']
    if winner not in parties:
        parties[winner] = []
    percentage_value = round(row['Winner margin'] * 100)
    parties[winner].append({'name': row['area'], 'value': percentage_value})

series_data = [{'name': party, 'data': data_points} for party, data_points in parties.items()]

with open('C:/Users/z0003/Documents/Work/Journalism/Test/series_data3.json', 'w') as f:
    json.dump(series_data, f)
