//https://github.com/Azure/azure-sdk-for-js/tree/main/samples/web-workers/js
const { ContainerClient } = require("@azure/storage-blob");

module.exports = async function (context, req) {

async function uploadToStorageBlob() {
  const azureStorageBlobConnectionString = process.env.AZURE_STORAGE_BLOB_CONNECTION_STRING;
  if (!azureStorageBlobConnectionString) {
    throw new Error(
      "Required environment variable AZURE_STORAGE_BLOB_CONNECTION_STRING is either missing or empty."
    );
  }

  const azureStorageBlobContainerName = process.env.AZURE_STORAGE_BLOB_CONTAINER_NAME;
  if (!azureStorageBlobContainerName) {
    throw new Error(
      "Required environment variable AZURE_STORAGE_BLOB_CONTAINER_NAME is either missing or empty."
    );
  }

  const data = "Hello, Web Workers!";

  const containerClient = new ContainerClient(
    azureStorageBlobConnectionString,
    azureStorageBlobContainerName
  );
  const blockBlobClient = containerClient.getBlockBlobClient("sample.txt");

  await blockBlobClient.upload(data, data.length);
}

uploadToStorageBlob();
  const responseMessage = "Successfully uploaded 'sample.txt' to Azure Storage Blob!"
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

uploadToStorageBlob().catch((err) => console.error(err));
    };
