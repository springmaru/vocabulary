from fbprophet import Prophet
import pandas as pd

df = pd.DataFrame(pd.read_csv("rubhistory.csv",parse_dates=['Date'],index_col = 'Date'))
data = pd.DataFrame(df.Open[:-13])
m = Prophet() # Default growth='linear'
m.fit(data)
future = m.make_future_dataframe(periods=365)
future.tail()

forecast = m.predict(future)
forecast.tail()

forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(60)


