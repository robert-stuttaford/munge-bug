(ns munge-bug
  (:require [cljs-http.client :as http]))

(defn test []
  (http/get "www.google.com"))

(test)