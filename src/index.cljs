(ns index
  (:require [reagent.core :as r]
            [clojure.string :as string]))

(defn home []
  (let [title (r/atom "")
        url (r/atom "")
        set-url! #(reset! url (str "http" (last (string/split js/window.location.-href "http"))))
        set-title! #(js/window .fetch "/api/getTitle" {:method "POST" :body url})]
    (r/use-effect set-url! [])
    (r/use-effect set-title! [@url])
    [:h1 @title]))