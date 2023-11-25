import { Satisfy } from "next/font/google";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
  
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  proofImage: f({ image    : {maxFileSize: "4MB", maxFileCount: 1}})
    .onUploadComplete(() => {}),
} 

 
export type OurFileRouter = typeof ourFileRouter;
