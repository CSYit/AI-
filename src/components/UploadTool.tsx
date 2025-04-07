import React, { useState } from 'react';
import axios from 'axios';

const UploadTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setMessage('请先选择一个文件。');
      return;
    }
    setMessage('文件上传中...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', 'exampleUserId'); // 示例用户ID
    formData.append('sessionId', 'exampleSessionId'); // 示例会话ID

    try {
      const response = await axios.post('https://your-backend-url.com/api/weddingcore', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('上传成功！请稍后查看生成的婚纱照。');
    } catch (error) {
      setMessage('上传失败，请重试。');
    }
  };

  return (
    <div className="upload-tool">
      <h2>上传您的图片或ZIP包</h2>
      <p className="upload-description">收到您的婚纱照底片后，我们会为您生成4套新场景摄影以及MV效果，在24h后返回给您</p>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">上传</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadTool; 