export interface Application {
  date_applied: string; // Date format: "Fri, 01 Sep 2023 00:00:00 GMT"
  id: number;
  post_image: string | null; // Assuming post_image can be either a string (file path) or null
  status: string;
  title: string;
  type: string;
}
