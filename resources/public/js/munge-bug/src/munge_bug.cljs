(ns munge-bug
  (:require [cljs-http.client :as http]))

(defn test []
  (http/post path {:edn-params params}))

(test)