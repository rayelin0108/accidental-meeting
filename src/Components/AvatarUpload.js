import React, { useState, useEffect } from 'react';
import { message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import dollsAvatar from '../assets/avatar.png';

const AvatarUpload = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [defaultImageUrl, setDefaultImageUrl] = useState(dollsAvatar);

    const getimg = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg/png/jpg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('頭像須為JPG/PNG檔案');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('照片上傳檔案大小限制2MB內!');
            return false;
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getimg(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                localStorage.setItem('uploadedImage', url);
            });
        }
    };

    useEffect(() => {
        const uploadedImage = localStorage.getItem('uploadedImage');
        if (uploadedImage) {
            setImageUrl(uploadedImage);
        } else {
            setImageUrl(defaultImageUrl);
        }
    }, [defaultImageUrl]);

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            />
        </button>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="頭像"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

export default AvatarUpload;
