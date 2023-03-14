export default [
  {
    name: "Sentry",
    href: "https://sentry.plsse.peacocktv.com/auth/login/sentry/",
  },
  {
    name: "APM",
    href: "https://51f86e9555a14d949a1e8dd8f8d1e49d.us-east-1.aws.found.io:9243/app/apm/services?rangeFrom=now-15m&rangeTo=now",
  },
  {
    name: "Spark",
    href: "https://spark.at.sky/nav_to.do?uri=%2F$pa_dashboards_overview.do",
  },
  {
    name: "Catchpoint: account",
    href: "https://portal.catchpoint.com/ui/Symphony/Dashboard/Custom/13230",
  },
  {
    name: "Catchpoint: sales",
    href: "https://portal.catchpoint.com/ui/Symphony/Dashboard/Custom/13106",
  },
  {
    name: "Veracode",
    href: "https://myapps.microsoft.com/signin/Veracode%20OTT/6f9deac6-6837-41e0-8ed5-1289e880d8e0?tenantId=68b865d5-cf18-4b2b-82a4-a4eddb9c5237",
  },
] satisfies { name: string; href: string }[];
