package main

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/labstack/echo/v4"
)

type WeatherController struct {
	WeatherURL string
	DB         *gorm.DB
}

func NewWeatherController(db *gorm.DB) *WeatherController {
	return &WeatherController{
		WeatherURL: "https://api.open-meteo.com/v1/forecast?latitude=50.0614&longitude=19.9366&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1",
		DB:         db,
	}
}

type HourlyUnits struct {
	Time          string `json:"time"`
	Temperature2m string `json:"temperature_2m"`
}

type Hourly struct {
	Time          []string  `json:"time"`
	Temperature2m []float64 `json:"temperature_2m"`
}

type Weather struct {
	gorm.Model
	Latitude             float64     `json:"latitude"`
	Longitude            float64     `json:"longitude"`
	GenerationtimeMs     float64     `json:"generationtime_ms"`
	UtcOffsetSeconds     float64     `json:"utc_offset_seconds"`
	Timezone             string      `json:"timezone"`
	TimezoneAbbreviation string      `json:"timezone_abbreviation"`
	Elevation            float64     `json:"elevation"`
	HourlyUnits          HourlyUnits `json:"hourly_units"`
	Temperature00        float64     `json:"temperature_00"`
	Temperature01        float64     `json:"temperature_01"`
	Temperature02        float64     `json:"temperature_02"`
	Temperature03        float64     `json:"temperature_03"`
	Temperature04        float64     `json:"temperature_04"`
	Temperature05        float64     `json:"temperature_05"`
	Temperature06        float64     `json:"temperature_06"`
	Temperature07        float64     `json:"temperature_07"`
	Temperature08        float64     `json:"temperature_08"`
	Temperature09        float64     `json:"temperature_09"`
	Temperature10        float64     `json:"temperature_10"`
	Temperature11        float64     `json:"temperature_11"`
	Temperature12        float64     `json:"temperature_12"`
	Temperature13        float64     `json:"temperature_13"`
	Temperature14        float64     `json:"temperature_14"`
	Temperature15        float64     `json:"temperature_15"`
	Temperature16        float64     `json:"temperature_16"`
	Temperature17        float64     `json:"temperature_17"`
	Temperature18        float64     `json:"temperature_18"`
	Temperature19        float64     `json:"temperature_19"`
	Temperature20        float64     `json:"temperature_20"`
	Temperature21        float64     `json:"temperature_21"`
	Temperature22        float64     `json:"temperature_22"`
	Temperature23        float64     `json:"temperature_23"`
}

func (wc *WeatherController) LoadWeatherData() error {
	resp, err := http.Get(wc.WeatherURL)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	var data map[string]interface{}
	err = json.Unmarshal(body, &data)
	if err != nil {
		return err
	}

	hourly := data["hourly"].(map[string]interface{})
	temperatures := hourly["temperature_2m"].([]interface{})

	weather := Weather{
		Latitude:             data["latitude"].(float64),
		Longitude:            data["longitude"].(float64),
		GenerationtimeMs:     data["generationtime_ms"].(float64),
		UtcOffsetSeconds:     data["utc_offset_seconds"].(float64),
		Timezone:             data["timezone"].(string),
		TimezoneAbbreviation: data["timezone_abbreviation"].(string),
		Elevation:            data["elevation"].(float64),
		Temperature00:        temperatures[0].(float64),
		Temperature01:        temperatures[1].(float64),
		Temperature02:        temperatures[2].(float64),
		Temperature03:        temperatures[3].(float64),
		Temperature04:        temperatures[4].(float64),
		Temperature05:        temperatures[5].(float64),
		Temperature06:        temperatures[6].(float64),
		Temperature07:        temperatures[7].(float64),
		Temperature08:        temperatures[8].(float64),
		Temperature09:        temperatures[9].(float64),
		Temperature10:        temperatures[10].(float64),
		Temperature11:        temperatures[11].(float64),
		Temperature12:        temperatures[12].(float64),
		Temperature13:        temperatures[13].(float64),
		Temperature14:        temperatures[14].(float64),
		Temperature15:        temperatures[15].(float64),
		Temperature16:        temperatures[16].(float64),
		Temperature17:        temperatures[17].(float64),
		Temperature18:        temperatures[18].(float64),
		Temperature19:        temperatures[19].(float64),
		Temperature20:        temperatures[20].(float64),
		Temperature21:        temperatures[21].(float64),
		Temperature22:        temperatures[22].(float64),
		Temperature23:        temperatures[23].(float64),
	}

	wc.DB.Create(&weather)

	return nil
}

func (wc *WeatherController) GetWeather(c echo.Context) error {
	resp, err := http.Get(wc.WeatherURL)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	var weather Weather
	err = json.Unmarshal(body, &weather)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	wc.DB.Create(&weather)

	return c.JSON(http.StatusOK, weather)
}

func main() {
	db, err := gorm.Open("mysql", "root:admin@/weather_app?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()

	db.AutoMigrate(&Weather{})

	wc := NewWeatherController(db)
	err = wc.LoadWeatherData()
	if err != nil {
		panic(err)
	}

	e := echo.New()
	e.GET("/weather", wc.GetWeather)

	e.Start(":1323")
}
