(ns api.getTitle
  (:require [cheerio]
            [js.node-fetch :as fetch]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn handler [req res]
  (go (let [r (<p! (fetch (:url req)))
            html (<p! (.text r))
            title (.text ((cheerio/load html) "title"))]
        (.json res title))))