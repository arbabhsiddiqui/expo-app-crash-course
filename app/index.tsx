import DateSelector from '@/components/DateSelector'
import FilterTabs from '@/components/FilterTabs'
import Header from '@/components/Header'
import TaskCard from '@/components/TaskCard'
import Colors from '@/constants/Colors'
import { TASKS, TaskStatus } from '@/constants/tasks'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const Index = () => {
  const insets = useSafeAreaInsets()

  const [activeFilter, setActiveFilter] = useState<TaskStatus>("All")
  const [filterData, setFilterData] = useState(TASKS);

  useEffect(() => {
    if (activeFilter === 'All') return setFilterData(TASKS)
    const filterData = TASKS.filter(item => {
      console.log(item.status.toLocaleLowerCase(), activeFilter.toLocaleLowerCase())
      return item.status.toLocaleLowerCase() === activeFilter.toLocaleLowerCase()
    })
    setFilterData(filterData);
  }, [activeFilter])

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style='light' />
      <FlatList data={filterData} keyExtractor={(item) => item.id}

        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }

        renderItem={({ item }) => <TaskCard task={item} />}

        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}

      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  list: {
    paddingBlockEnd: 10
  }
})
