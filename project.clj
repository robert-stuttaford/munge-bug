(defproject munge-bug "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [cljs-http "0.1.15"]]
  :shadow {:public-path  "/js/munge-bug"
           :target-path  "resources/public/js/munge-bug"
           :core-libs    [cljs.core
                          cljs-http.client]
           :modules      [{:id :munge-bug :main munge-bug}]})
