import { Select } from 'antd';
const { Option } = Select;
const preferredCountrySelect = (preferredCountry: string, setPreferredCountry:any) => {
  return(
    <>
    <Select value={preferredCountry} defaultValue={preferredCountry} style={{ width: 120 }} onChange={(value)=>setPreferredCountry(value)}>
      <Option value="france">France</Option>
      <Option value="germany">Germany</Option>
      <Option value="italy">Italy</Option>
      <Option value="russia">Russia</Option>
      <Option value="spain">Spain</Option>
      <Option value="uk">United Kingdom</Option>
    </Select>
    </>
  )
  
}

export default preferredCountrySelect;