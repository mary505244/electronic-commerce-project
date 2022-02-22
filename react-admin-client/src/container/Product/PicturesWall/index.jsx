import React, {Component, Fragment} from 'react';
import {Upload, Modal, message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {BASE_URL} from "../../../config";
import {reqDeletePicture} from "../../../api";
import store from "../../../redux/store";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class PicturesWall extends Component {
    state = {
        previewVisible: false, //是在展示預覽窗
        previewImage: '', //要預覽的圖片的地址或base64地址
        previewTitle: '',
        fileList: [],
    };

    //關閉預覽窗
    handleCancel = () => this.setState({previewVisible: false});

    //展示預覽窗
    handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    //獲取該商品對應的圖片名字，構建一個數字，供新增商品使用
    getImgArr = () => {
        let result = [];
        const {fileList} = this.state;
        fileList.forEach(file => {
            result.push(file.name);
        })
        return result;
    }

    //回顯圖片
    setImgArr = (imgs) => {
        let fileList = [];
        imgs.forEach((img, index) => {
            let file = {
                uid: -index,
                name: img,
                url: `${BASE_URL}/upload/${img}`
            };
            fileList.push(file);
        })
        this.setState({
            fileList
        })
    }


   //圖片狀態發生改變的回調
   handleChange = async ({file, fileList}) => {
    //如果文件上傳成功
    if (file.status === 'done') {
        const {status, data} = file.response;
        if (status === 0) {
            const {url, name} = data;
            file.url = url;
            file.name = name;
        }
    } else if (file.status === 'removed') {
        //獲取要刪除文件的名稱
        const {name} = file;
        //刪除圖片
        const {status, msg} = await reqDeletePicture(name);
        if (status === 0) {
            message.success("文件刪除成功", 2);
        } else {
            message.error(msg, 2);
        }

    }
    this.setState({fileList})
};

    render() {
        const {previewVisible, previewImage, fileList, previewTitle} = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        );
        let token = store.getState()?.login?.token;
        token = `bearer ${token}`;
        return (
            <Fragment>
                <Upload
                    action={`${BASE_URL}/manage/img/upload`} //action：接收圖片服務器的地址
                    method={"POST"}
                    name="image"
                    listType="picture-card" //listType：照片牆的展示方式
                    fileList={fileList} // fileList：圖片列表 {uid:xxx,name:xxx,status:xxx,url:xxx}
                    onPreview={this.handlePreview} //onPreview：點擊預覽按鈕的回調
                    onChange={this.handleChange} //onChange：圖片狀態改變的回調（圖片上傳中，圖片被刪除、圖片成功上傳）
                    headers={{Authorization: token}} //上傳所需額外參數或返回上傳額外參數的方法
                >
                    {fileList.length >= 6 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </Fragment>
        );
    }
}
