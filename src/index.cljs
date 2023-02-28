(ns src.index
  (:require [reagent.core :as reagent]
            [lambda.api.get-title :as get-title]))

(defonce state (reagent/atom {:title ""}))

(defn- handle-url [url]
  (let [response (get-title/get-title url)]
    (reagent/swap! state assoc :title response)))

(defn- on-submit [event]
  (-> event .-target .value handle-url))

(defn start []
  (reagent/render [[:h1 "Enter a URL"]
                   [:input {:type "text" :onSubmit on-submit}]
                   [:h2 (:title @state)]] js/document.body))