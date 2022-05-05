/**
 * @description 文章列表
 * @author Aquarius
 * @date 2022-5-1 15:00:23
 */
import axios from "../utils/http";

// 获取文章列表
export const getList = async ({ pageSize, pageIndex }) => await axios.get("/getlists", {
  params: {
    pageSize, pageIndex
  }
});

// 获取指定文章
export const getListById = async (id) => await axios.get("/getListsById", {
  params: {
    id
  }
});

// 观看数量
export const addWatch = async (id) => await axios.get("/addWatch", { 
  params: { 
    id 
  } 
})
