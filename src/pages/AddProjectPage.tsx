import { useState } from "react";
import addProjectStyles from "../assets/styles/AddProject.module.css";
import Button from "../components/Button";

function AddProjectPage() {
  const [leadImage, setLeadImage] = useState<FileWithPreview | null>(null);

  const [selectedImages, setSelectedImages] = useState<FileWithPreview[]>([]);

  const handleLeadImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setLeadImage({ file: file, preview: reader.result as string });
      };
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allFiles: FileList | null = e.target.files;

    if (!allFiles) return;

    const allFilesWithPreview: FileWithPreview[] = [];

    const readFileAsDataURL = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    const processFiles = async () => {
      for (let i = 0; i < allFiles.length; i++) {
        if (e.target.files && e.target.files[i]) {
          const file = e.target.files[i];
          const preview = await readFileAsDataURL(file);

          allFilesWithPreview.push({
            file: file,
            preview: preview,
          });
        }
      }

      setSelectedImages([...selectedImages, ...allFilesWithPreview]);
    };

    processFiles();
  };

  return (
    <div className={addProjectStyles.container}>
      <div className={addProjectStyles.left__container}>
        <h1>Project Information</h1>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Project Title"
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Project Description"
        />
        <input
          type="text"
          id="techStack"
          name="techStack"
          placeholder="Tech Stack ( Comma Separated Values )"
        />
        <input
          type="file"
          id="leadImage"
          name="leadImage"
          accept="image/*"
          onChange={handleLeadImageChange}
        />
        {leadImage ? (
          <div className={addProjectStyles.image__preview__wrapper}>
            <ImagePreview
              imagePath={leadImage.preview}
              altText={leadImage.file.name}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={addProjectStyles.right__container}>
        <input
          type="file"
          onChange={handleImageChange}
          id="images"
          accept="image/*"
          multiple
          name="images"
        />

        <div className={addProjectStyles.multiple__image__preview}>
          {selectedImages.map((selectedImage) => (
            <div className={addProjectStyles.multiple__image__view}>
              <ImagePreview
                imagePath={selectedImage.preview}
                altText={selectedImage.file.name}
              />
            </div>
          ))}
        </div>

        <input
          type="text"
          id="githubLink"
          name="githubLink"
          placeholder="Github Link"
        />

        <input
          type="text"
          id="liveLink"
          name="liveLink"
          placeholder="Live Link"
        />

        <div className={addProjectStyles.spacer}></div>
        <Button
          label="Save"
          callback={() => {
            console.log(leadImage);
            console.log(selectedImages);
          }}
        />
      </div>
    </div>
  );
}

interface FileWithPreview {
  file: File;
  preview: string;
}

interface ImagePreviewInfo {
  imagePath: string;
  altText: string;
}

function ImagePreview({ imagePath, altText }: ImagePreviewInfo) {
  return (
    <img
      className={addProjectStyles.image__preview}
      src={imagePath}
      alt={altText}
    />
  );
}
export default AddProjectPage;
